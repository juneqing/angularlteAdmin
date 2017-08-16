import { FieldTypes, Types } from '../../types';
import { ITable } from '../../types';
import { FormField } from '../../types';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  name: string = '用户管理';
  model: string = 'userModel';
  selectedUser: Types.IUser;
  relationTree: {
    level1Parent: Types.IUser,
    level2Parent: Types.IUser,
    level3Parent: Types.IUser,
    level1Children: Types.IUser[],
    level2Children: Types.IUser[],
    level3Children: Types.IUser[],
  };
  userClickRecords: Types.ITaskRecord[] = []
  fields: FormField[] = [
    { key: '_id', label: '_id', type: FieldTypes.String },
    { key: 'nickname', label: '昵称', type: FieldTypes.String },
    { key: 'createDt', label: '注册时间', type: FieldTypes.Date, sortable: true },
    { key: 'sex', label: '性别', type: FieldTypes.String },
    { key: 'todayStudent', label: '今日收徒', type: FieldTypes.Number },
    { key: 'todayMoney', label: '今日收益', type: FieldTypes.Money },
    { key: 'historyMoney', label: '历史收益', type: FieldTypes.Money },
    { key: 'totalMoney', label: '当前余额', type: FieldTypes.Money }
  ];
  oneActions = [
    { label: '师徒关系树', callback: (item) => { this.selectedUser = item; this.getRelationTree(); this.userClickRecords = undefined; } },
    { label: '返利记录', callback: (item) => { this.selectedUser = item; this.getUserClickRecord(); this.relationTree = undefined; } }
  ]
  delable: boolean = false;
  async getUserClickRecord() {
    this.userClickRecords = await this.config.Get("/admin.userClickRecord.go?userId=" + this.selectedUser._id);
  }

  constructor(public config: ConfigService) { }
  async getRelationTree() {
    let data = await this.config.Get("/admin.relationTree.go?userId=" + this.selectedUser._id);
    this.relationTree = data.tree;
  }

  ngOnInit() {
  }

}
