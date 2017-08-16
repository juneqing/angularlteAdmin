import { ConfigService } from '../../services/config.service';
import { Component, OnInit } from '@angular/core';
import { Types } from '../../types';

@Component({
  selector: 'app-advert-edit-advertise-page',
  templateUrl: './advert-edit-advertise-page.component.html',
  styleUrls: ['./advert-edit-advertise-page.component.css']
})
export class AdvertEditAdvertisePageComponent implements OnInit {
  type = 'url';
  taskNums = [];
  taskTags: Types.ITaskTag[] = [];
  selectedTaskTag: Types.ITaskTag = { _id: '', name: '', sort: 0 };
  step = 0;
  newTask: Types.ITask = {
    _id: '',
    title: '',
    createDt: new Date(),
    fee: 0,
    publisher: '',
    shareMoney: 0,
    // 余额
    totalMoney: 0,
    active: false,
    websiteUrl: '',
    bannerUrl: '',
    taskTag: '',
  }
  constructor(public config: ConfigService) {
    this.getTaskTagList();
  }

  ngOnInit() {

  }
  // ngAfterViewInit(){
  //   console.log('hello')
  //     window['$'](document).ready(function(){
  //   window['$']("#calendar").asDatepicker();
  // });

  // }
  selectTaskTag(taskTag: Types.ITaskTag) {

    this.selectedTaskTag = taskTag;
    console.log(taskTag);
  }
  showDatePicker() {
    window['$']("#calendar").asDatepicker();
  }
  async  getTaskTagList() {
    this.taskTags = await this.config.Get('/advert.taskTags.go');

    this.selectedTaskTag = this.taskTags[0];
  }


  async uploadTaskImageUrl(file: File) {
    let base64 = await this.config.convertFileToBase64(file);
    let compressData = await this.config.compressBase64(base64);
    this.newTask.imageUrl = await this.config.PostLocal(`/api.uploadBase64.go`, { base64: compressData });
  }
  async uploadTaskBannerUrl(file: File) {
    let base64 = await this.config.convertFileToBase64(file);
    // let compressData = await this.config.compressBase64(base64);
    this.newTask.bannerUrl = await this.config.PostLocal(`/api.uploadBase64.go`, { base64 });
  }
  async saveNewItem() {
    this.newTask.taskTag = this.selectedTaskTag._id;
    this.newTask.publisher = this.config.advert._id;
    let result = await this.config.Post('/advert.publishTask.go', this.newTask);
    this.config.router.navigateByUrl('/advert');
  }
}
