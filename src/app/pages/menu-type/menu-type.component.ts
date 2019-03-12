import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Http, Response, Headers } from '@angular/http';
import { Title } from '@angular/platform-browser';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MenuTypeModel } from 'src/app/models/MenuTypeModel';
import { MenuTypeService } from 'src/app/service/menu-type.service';
import {ResponseModel} from 'src/app/models/ResponseModel';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss'
import 'rxjs/add/operator/map';

declare var $: any;

@Component({
  selector: 'app-menu-type',
  templateUrl: './menu-type.component.html',
  styleUrls: ['./menu-type.component.css'],
  providers: [MenuTypeService]
})
export class MenuTypeComponent implements OnInit {


  //#region  [Global Declaration]
  public _listMenuType: MenuTypeModel[];
  public _responseModel: ResponseModel;
  public menuType_Error: boolean = false;
  public _objMenuType = new MenuTypeModel();
  public isAdd: boolean = false;
  public isEdit: boolean = false;
  public isLoadingData: boolean = false;

  addMenuTypeFG: FormGroup;
  editMenuTypeFG: FormGroup;

  addSuccess: boolean;
  editSuccess: boolean;

  private BaseAPIUrl = "http://localhost:33997/"; // api base url

  data: any = [];
  public divAdd = false;
  public divList = false;
  submitted: boolean;
  //#endregion

  //#region [Constructor]
  constructor(private http: Http, private formBuilder: FormBuilder, private MenuTypeService: MenuTypeService) {
    this.addMenuTypeFG = this.CreateFormGroup();
  }
  //#endregion

  //#region [Init Method]
  ngOnInit() {
    //this._objMenuType.MenuTypeName = "test Title";
    this.divList = true;
    this.submitted = false;
    this.isAdd = true;
    this.isEdit = false;
    this.getAllMenuTypes(); // get all menu types
    // this.MenuTypeForm = this.formBuilder.group({
    //   MenuTypeId_Pk: [null],
    //   MenuTypeName: ['', Validators.required],
    //   ECMS_MenuTypePk: [null],
    //   ShortDesc: [null, Validators.required],
    //   LongDesc: [null, Validators.required],
    //   DisplayOrder: [null],
    //   IsActive: [null],
    //   MenuURL: [null],
    //   MenuImage: [null],
    //   MenuImageText: [null],
    //   MetaDetail_Fk: [null],
    //   ParentMenuTypeId: [null],
    //   CreateDate: Date.now(),
    //   UpdateDate: Date.now()
    // });
  }
  ///#endregion

  //#region [Form Group]
  CreateFormGroup() {
    return new FormGroup({
      _menuTypeId_Pk: new FormControl(),
      _menuTypeName: new FormControl(),
      _eCMS_MenuTypePk: new FormControl(),
      _shortDesc: new FormControl(),
      _longDesc: new FormControl(),
      _displayOrder: new FormControl(),
      _isActive: new FormControl(),
      _menuURL: new FormControl(),
      _menuImage: new FormControl(),
      _menuImageText: new FormControl(),
      _metaDetail_Fk: new FormControl(),
      _parentMenuTypeId: new FormControl(),
      _createDate: new FormControl(),
      _updateDate: new FormControl()
    });
  }
  //#endregion

  //#region [GET DATA]

  public getAllMenuTypes() {
    this.isLoadingData = true;
    this.MenuTypeService.GetAllMenuType().subscribe(
      data => {        
        this._responseModel = data;
        if(this._responseModel.Status == "SUCCESS")
        {
          //console.log(JSON.parse(this._responseModel.Message));
          this._listMenuType = JSON.parse(this._responseModel.Message);
          console.log(this._listMenuType);
        }
        else{
          alert(this._responseModel.Message);
        }
      },
      error => {
        console.log(error);
        this.isLoadingData = false;
      },
      () => {
        this.isLoadingData = false;
      }
    );
  }
  //#endregion

  //#region [CLEAR FORM DATA]
  ClearData() {
    this._objMenuType = null;
    this._objMenuType = new MenuTypeModel();
    this.isAdd = true;
    this.isEdit = false;
    this.divAdd = false;
    this.divList = true;
  }
  //#endregion

  //#region [INSERT]
  GotoAddMenuType()
  {
    this._objMenuType = null;
    this._objMenuType = new MenuTypeModel();
    this.isAdd = true;
    this.isEdit = false;
    this.divAdd = true;
    this.divList = false;
    console.log(this._objMenuType);
    this.addMenuTypeFG.reset();
  }

  AddMenuType(_objMenuType) {
    console.log(_objMenuType);
    this.MenuTypeService.AddMenuType(_objMenuType).subscribe(
      data => {
        // refresh the list
        this.getAllMenuTypes();
        this.isAdd = true;
        this.addSuccess = true;
        alert('Menu Type details saved successfully !');
        this._objMenuType = new MenuTypeModel();
        return true;
      },
      error => {
        console.error('Error occured while adding menu-type');
        this.addSuccess = false;
        alert(error);
      }
    )
  }
  //#endregion

  //#region [UPDATE]
  EditMenuType(_MenuType: MenuTypeModel) {
    this.isEdit = true;
    this.isAdd = false;
    this.divAdd = true;
    this.divList = false;
    this._objMenuType = {
      MenuTypeId: _MenuType.MenuTypeId,
      MenuTypeName: _MenuType.MenuTypeName,
     
      ShortDesc: _MenuType.ShortDesc,
      LongDesc: _MenuType.LongDesc,
      DisplayOrder: _MenuType.DisplayOrder,
      IsActive: _MenuType.IsActive,
      MenuURL: _MenuType.MenuURL,
      MenuImage: _MenuType.MenuImage,
      MenuImageText: _MenuType.MenuImageText
     
    };
    
  }

  UpdateMenuType(_MenuType) {
    this.MenuTypeService.UpdateMenuType(_MenuType).subscribe(
      data => {
        //refresh list 
        this.getAllMenuTypes();
        alert('Menu Type Updated Successfully!');
        this.editSuccess = true;
        this._objMenuType = new MenuTypeModel();
        this.isEdit = false;
        this.isAdd = true;
        return true;
      },
      error => {
        console.error("Error occured while updating menu-type.");
        this.editSuccess = false;
        alert(error);
      }
    )
  }  
  //#endregion

  //#region  [DELETE DATA]
  DeleteMenuType(_MenuType: MenuTypeModel) {
    if (confirm("Are you sure you want to delete Menu Type. ?")) {
      //alert(event.target.attributes.id.nodeValue);
      alert(_MenuType.MenuTypeId);
      // this.MenuTypeService.DeleteMenuType(_MenuType).subscribe(
      //   data => {
      //     // refresh the list
      //     alert('Menu Type deleted successfully!');
      //     this.getAllMenuTypes();
      //     return true;
      //   },
      //   error => {
      //     this.isLoadingData = false;
      //     console.log('Error while deleting menu type record.');
      //     alert(error);
      //   },
      //   () => {
      //     this.isLoadingData = false;
      //   }
      // );
    }
  }  
  //#endregion
}
