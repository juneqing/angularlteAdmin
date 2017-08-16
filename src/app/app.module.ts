import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './com/main-header/main-header.component';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { ContentWrapperComponent } from './com/content-wrapper/content-wrapper.component';
import { MainFooterComponent } from './com/main-footer/main-footer.component';
import { ControlSidebarComponent } from './com/control-sidebar/control-sidebar.component';
import { MainSidebarComponent } from './com/main-sidebar/main-sidebar.component';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ConfigService } from './services/config.service';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { StaticsPageComponent } from './pages/statics-page/statics-page.component';
import { TaskTagPageComponent } from './pages/task-tag-page/task-tag-page.component';
import { TaskTagListPageComponent } from './pages/task-tag-list-page/task-tag-list-page.component';
import { TaskTagNewPageComponent } from './pages/task-tag-new-page/task-tag-new-page.component';
import { RechargeListPageComponent } from './pages/recharge-list-page/recharge-list-page.component';
import { RechargeEditPageComponent } from './pages/recharge-edit-page/recharge-edit-page.component';
import { TaskTagEditPageComponent } from './pages/task-tag-edit-page/task-tag-edit-page.component';
import { TaskListPageComponent } from './pages/task-list-page/task-list-page.component';
import { MoneyPipe } from './pipes/money.pipe';
import { TypePipe } from './pipes/type.pipe';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { TableComponent } from './com/table/table.component';
import { RechargeCashPageComponent } from './pages/recharge-cash-page/recharge-cash-page.component';
import { BannerListPageComponent } from './pages/banner-list-page/banner-list-page.component';
import { BannerEditPageComponent } from './pages/banner-edit-page/banner-edit-page.component';
import { TaskRecordListPageComponent } from './pages/task-record-list-page/task-record-list-page.component';
import { OfficeTaskPageComponent } from './pages/office-task-page/office-task-page.component';
import { OfficeReleaseEditPageComponent } from './pages/office-release-edit-page/office-release-edit-page.component';
import { ProjectListPageComponent } from './pages/project-list-page/project-list-page.component';
import { AdvertPageComponent } from './pages/advert-page/advert-page.component';
import { DatePipe } from '@angular/common';
import { BugPageComponent } from './pages/bug-page/bug-page.component';
import { PropPipe } from './pipes/prop.pipe';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { TaskPageComponent } from './pages/task-page/task-page.component';
import { AdvertHomePageComponent } from './pages/advert-home-page/advert-home-page.component';
import { AdvertSidebarComponent } from './com/advert-sidebar/advert-sidebar.component';
import { AdvertEditAdvertisePageComponent } from './pages/advert-edit-advertise-page/advert-edit-advertise-page.component';
import { AdvertTemplatePageComponent } from './pages/advert-template-page/advert-template-page.component';
import { AdvertUserReportsPageComponent } from './pages/advert-user-reports-page/advert-user-reports-page.component';
import { AdvertStaticsPageComponent } from './pages/advert-statics-page/advert-statics-page.component';
import { AdvertHeaderComponent } from './com/advert-header/advert-header.component';
import { AdvertAccountPageComponent } from './pages/advert-account-page/advert-account-page.component';



@NgModule({
    declarations: [
        AppComponent,
        MainHeaderComponent,
        ContentWrapperComponent,
        MainFooterComponent,
        ControlSidebarComponent,
        MainSidebarComponent,
        LoginPageComponent,
        AdminPageComponent,
        HomePageComponent,
        StaticsPageComponent,
        TaskTagPageComponent,
        TaskTagListPageComponent,
        TaskTagNewPageComponent,
        RechargeListPageComponent,
        RechargeEditPageComponent,
        TaskTagEditPageComponent,
        TaskListPageComponent,
        MoneyPipe,
        AdvertPageComponent,
        TableComponent,
        RechargeCashPageComponent,
        BannerListPageComponent,
        BannerEditPageComponent,
        TaskRecordListPageComponent,
        OfficeTaskPageComponent,
        OfficeReleaseEditPageComponent,
        ProjectListPageComponent,
        BugPageComponent,
        TypePipe,
        PropPipe,
        UserPageComponent,
        TaskPageComponent,
        AdvertHomePageComponent,
        AdvertSidebarComponent,
        AdvertEditAdvertisePageComponent,
        AdvertTemplatePageComponent,
        AdvertUserReportsPageComponent,
        AdvertStaticsPageComponent,
        AdvertHeaderComponent,
        AdvertAccountPageComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            { path: '', redirectTo: '/login', pathMatch: 'full' },
            { path: 'login', component: LoginPageComponent, pathMatch: 'full' },
            {
                path: 'admin', component: AdminPageComponent,
                children: [
                    { path: '', component: HomePageComponent },
                    { path: 'statics', component: StaticsPageComponent },
                    { path: 'taskTag-list', component: TaskTagListPageComponent },
                    { path: 'taskTag-new', component: TaskTagNewPageComponent },
                    { path: 'taskTag', component: TaskTagPageComponent },
                    { path: 'recharge-list', component: RechargeListPageComponent },
                    { path: 'taskTag-edit', component: TaskTagEditPageComponent },
                    { path: 'task-list', component: TaskListPageComponent },
                    { path: 'recharge-cash', component: RechargeCashPageComponent },
                    { path: 'banner-list', component: BannerListPageComponent },
                    { path: 'banner-edit', component: BannerEditPageComponent },
                    { path: 'task-record-list', component: TaskRecordListPageComponent },
                    { path: 'office-task', component: OfficeTaskPageComponent },
                    { path: 'office-release-edit', component: OfficeReleaseEditPageComponent },
                    { path: 'project-list', component: ProjectListPageComponent },
                    { path: 'project-edit', component: ProjectListPageComponent },
                    { path: 'bug', component: BugPageComponent },
                    { path: 'user', component: UserPageComponent },

                ]
            },
            {
                path: 'advert', component: AdvertPageComponent,
                children: [
                    { path: '', component: AdvertHomePageComponent },
                    { path: 'advert-edit-advertise', component: AdvertEditAdvertisePageComponent },
                    { path: 'advert-template', component: AdvertTemplatePageComponent },
                    { path: 'advert-user-reports', component: AdvertUserReportsPageComponent },
                    { path: 'advert-statics', component: AdvertStaticsPageComponent },
                    { path: 'advert-account', component: AdvertAccountPageComponent }
                ]
            },

        ]),
        FormsModule,
        HttpModule,
        JsonpModule,
        ChartsModule
    ],
    providers: [ConfigService, TypePipe, MoneyPipe, DatePipe, PropPipe],
    bootstrap: [AppComponent]
})
export class AppModule { }
