import { ITable } from '../../types';
import { FormField } from '../../types';
import { FieldTypes } from '../../types';
import { ConfigService } from '../../services/config.service';
import { Component, OnInit, Sanitizer } from '@angular/core';
import { Types } from '../../types';


@Component({
  selector: 'app-office-task-page',
  templateUrl: './office-task-page.component.html',
  styleUrls: ['./office-task-page.component.css']
})
export class OfficeTaskPageComponent implements OnInit {

  bannerTable: ITable = {
    name: '广告管理',
    model: 'bannerModel',
    fields: [
      { key: 'sort', label: '排序', sortable: true, desc: true, type: FieldTypes.String },
      {key:'task',label:'任务',type:FieldTypes.String},
      { key: 'bannerImg', label: '广告图', type: FieldTypes.Image },
      {key:'active',label:'激活',type:FieldTypes.CheckBox}
    ],
    createable:false
  };
  officeTaskTable: ITable = {
    name: '官方任务管理',
    model: 'taskModel',
    fields: [
      { key: 'title', label: '名称', type: FieldTypes.String },
      { key: 'createDt', label: '发布日期', type: FieldTypes.Date, sortable: true,createable:false },
      { key: 'fee', label: '发布金额', type: FieldTypes.Money },
      { key: 'totalMoney', label: '余额', type: FieldTypes.Money },
      { key: 'shareMoney', label: '点击金额', type: FieldTypes.Money },
      { key: "imageUrl", label: '任务预览图片', type: FieldTypes.Image },
      {key:'publisher',label:'发布者',type:FieldTypes.String},
      {key:'websiteUrl',label:'推广网址',type:FieldTypes.Url}
    ],
    oneActions: [{ callback: async (item: Object) => { await this.config.GetServer('add-banner?_id=' + item['_id']); }, label: '作为广告' }]
  }


  constructor(public config: ConfigService) { }
  ngOnInit() { }

}
