import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { UserModel } from '../../_Models/user.model';
// import { UserTestData } from '../../_TestData/user.testdata';

@IonicPage({
    name: 'homepage'
})
@Component({
    selector: 'page-home',
    templateUrl: 'Home.page.html',
})
export class HomePage {
    public user: UserModel;
    
    constructor() {}

    ngOnInit () {}
    
}
