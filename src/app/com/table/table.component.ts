
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { Types, FieldTypes, FormField } from '../../types';

enum Status {
  LIST,
  CREATE,
  DETAIL,
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  Status = Status;
  keyword: string = '';
  count: number = 0;
  status: Status = Status.LIST;
  @Input() delable: boolean = true;
  @Input() createable: boolean = true;
  @Input() editable: boolean = true;
  @Input() tableName;
  @Input() items = [];
  @Input() model: string = 'userModel';
  @Input() fields: FormField[];
  @Input() pageSize: number = 10;
  @Input() keys: string[] = ['title']
  @Input() maxImageSize = 400000;
  @Input() someActions: { label: string, callback: (items: any[]) => void }[] = [];
  @Input() oneActions: { label: string, callback: (item: Object) => void }[] = [];
  @Input() query: { key: string, value: string } = { key: '', value: '' }
  currentPage = 0;
  pages: number[] = [1];
  newItem = {};
  editItem = {};
  FieldTypes = FieldTypes;
  @Output() one = new EventEmitter<{ name: string, item: any }>();
  async search() {
    this.items = await this.config.Get(`/admin.rest.go?model=${this.model}&keyword=${this.keyword}&keys=${this.keys.join(',')}`)
  }


  constructor(public config: ConfigService) { }

  ngOnInit() {
    this.fields.forEach(field => {
      if (typeof field.editable === 'undefined') { field.editable = true; };
      if (typeof field.createable === 'undefined') { field.createable = true; };
    });
    this.getItemList();
    this.getCount();
  }

  async getItemList() {

    let items = [];
    let sortField = this.fields.find(field => field.sortable);
    let sorter = { key: sortField.key, desc: sortField.desc };
    // 分类查找
    let queryStr = this.query.key ? '&queryKey=' + this.query.key + '&queryValue=' + this.query.value : '';
    let sortStr = sorter ? `&sort=${sorter.key}&desc=${sorter.desc}` : '';
    let pageStr = `&${this.pageSize}=10&page=${this.currentPage}`;
    items = await this.config.Get(`/admin.rest.go?model=${this.model}${queryStr}${sortStr}${pageStr}`);
    items.forEach(item => { if (!item.checked) { item.checked = false } });
    this.items = items;
  }
  async toggleSort(field: { sortable: boolean, desc: boolean }) {

    this.fields.forEach(filed => filed.sortable = false);
    field.sortable = true;

    field.desc = !field.desc;
    await this.getItemList();
  }

  async getCount() {
    this.count = await this.config.Get(`/admin.rest.go?model=${this.model}&isCount=true`);
    this.pages = new Array(Math.ceil(this.count / this.pageSize));
  }

  async lessPage() {
    this.currentPage <= 0 ? this.currentPage = 0 : this.currentPage = --this.currentPage;
    await this.getItemList();
  }

  async morePage() {
    this.currentPage >= this.pages.length - 1 ? this.currentPage = this.pages.length - 1 : this.currentPage = ++this.currentPage;
    await this.getItemList();
  }

  deleteBat() {
    console.log(this.items.filter(item => item.checked));
    console.log(this.items);
  }

  createItem() {
    for (let field of this.fields.filter(prop => prop.createable)) {
      Object.defineProperty(this.newItem, field.key, { writable: true, configurable: true, value: '', enumerable: true });
    }
    this.status = Status.CREATE;
  }
  async showList() {
    this.status = Status.LIST;
    await this.getItemList();
  }
  async saveNewItem() {
    let result = await this.config.PostLocal(`/admin.rest.go?model=${this.model}`, this.newItem);
    this.showList();
  }
  async deleteItem(item) {
    let delAction = await this.config.DeleteLocal(`/admin.rest.go?model=${this.model}&_id=${item._id}`);
    await this.showList();
  }
  editOneItem(item) {
    this.status = Status.DETAIL;
    this.editItem = item;
  }

  async updateItem() {
    let putAction = await this.config.PutLocal(`/admin.rest.go?model=${this.model}&_id=${this.editItem['_id']}`, this.editItem);
    await this.showList();
  }
  //上传图片
  async  uploadImage(file: File, obj: Object, key: string) {
    if (file) {
      let base64 = await this.config.convertFileToBase64(file);
      let compressData = await this.config.compressBase64(base64, this.maxImageSize);
      let url = await this.config.PostLocal(`/api.uploadBase64.go`, { base64: compressData });
      Object.defineProperty(obj, key, { writable: true, configurable: true, enumerable: true, value: url });
    } else {
      alert('请先选择文件')
    }
  }

}
