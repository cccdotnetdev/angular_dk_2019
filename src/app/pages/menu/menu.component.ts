import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MenuModel } from 'src/app/models/MenuModel';
import { MenuService } from 'src/app/service/menu.service';
import { ResponseModel } from 'src/app/models/ResponseModel';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { MenuTypeModel } from 'src/app/models/MenuTypeModel';
import { MenuTypeService } from 'src/app/service/menu-type.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [MenuService]
})
export class MenuComponent implements OnInit {

  data: any = [];
  selectedType: any;

  public _objMenu = new MenuModel();
  public _lstMenu: MenuModel[];
  public _responseModel: ResponseModel;
  public _lstMenuType: MenuTypeModel[];

  public isAdd: boolean = false;
  public isEdit: boolean = false;
  public divList: boolean = false;
  public divAdd: boolean = false;

  addMenuFG: FormGroup;

  constructor(
    private http: Http,
    private formBuilder: FormBuilder,
    private MenuService: MenuService,
    private MenuTypeService: MenuTypeService,
    private chRef: ChangeDetectorRef) {
    //this.addMenuFG = this.CreateFormGroup();
  }

  //[Init Method]
  ngOnInit() {
    this.divList = true;
    this.divAdd = false;
    this.addMenuFG = this.CreateFormGroup();
    this.getAllMenu();
    this.chRef.detectChanges();
  }

  bindMenuTypeDropDown() {
    this.selectedType = "";
    this.MenuTypeService.GetAllMenuType().subscribe(
      data => {
        this._responseModel = data;
        if (this._responseModel.Status == "SUCCESS") {
          this._lstMenuType = JSON.parse(this._responseModel.Message);
          //console.log(this._lstMenuType);
        }
        else {
          alert(this._responseModel.Message);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  //[Get All Menu]
  getAllMenu() {
    this.MenuService.getAllMenu().subscribe(
      data => {
        this._responseModel = data;
        if (this._responseModel.Status == "SUCCESS") {
          this._lstMenu = JSON.parse(this._responseModel.Message);
          //console.log(this._lstMenu);
        }
        else {
          alert(this._responseModel.Message);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  GotoAddMenu() {
    this._objMenu = null;
    this._objMenu = new MenuModel();
    this.divList = false;
    this.divAdd = true;
    this.isAdd = true;
    this.isEdit = false;

    this.addMenuFG.reset();
    this.bindMenuTypeDropDown();
    this.chRef.detectChanges();

    //.log(this._objMenu);

  }

  ClearData() {
    this._objMenu = null;
    this._objMenu = new MenuModel();
    this.divAdd = false;
    this.divList = true;
    this.chRef.detectChanges();
  }

  CreateFormGroup() {
    return this.formBuilder.group({
      _menuId: [null],
      _menuName: [null, Validators.required],
      _menuDesc: [null, Validators.required],
      _menuImage: new FormControl(),
      _menuImageText: new FormControl(),
      _isActive: new FormControl(),
      _isFeatured: new FormControl(),
      _displayOrder: [null, Validators.required],
      _menuTypeName: [null, Validators.required],
    });
  }

  isFieldValid(field: string) {
    return !this.addMenuFG.get(field).valid && this.addMenuFG.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field)
      // 'has-feedback': this.isFeildValid(field)
    }
  }

  onSubmit() {

    //  this.chRef.detectChanges();
    if (!this.addMenuFG.valid) {
      Object.keys(this.addMenuFG.controls).forEach(field => { // {1}
        const control = this.addMenuFG.get(field);            // {2}
        control.markAsTouched({ onlySelf: true });       // {3}
      });

    }

  }

  AddMenu(_objMenu) {
    this.MenuService.addMenu(_objMenu).subscribe(
      data => {
       
      },
      error => {}        

    );
  }

}
