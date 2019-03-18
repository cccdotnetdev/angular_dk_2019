import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { MenuService } from 'src/app/service/menu.service';
import { FormBuilder } from '@angular/forms';
import { Http } from '@angular/http';
import { MenuComponent } from './menu.component';
describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  beforeEach(() => {
    const changeDetectorRefStub = { detectChanges: () => ({}) };
    const menuServiceStub = { getAllMenu: () => ({ subscribe: () => ({}) }) };
    const formBuilderStub = {};
    const httpStub = {};
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [MenuComponent],
      providers: [
        { provide: ChangeDetectorRef, useValue: changeDetectorRefStub },
        { provide: MenuService, useValue: menuServiceStub },
        { provide: FormBuilder, useValue: formBuilderStub },
        { provide: Http, useValue: httpStub }
      ]
    });
    spyOn(MenuComponent.prototype, 'CreateFormGroup');
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('data defaults to: []', () => {
    expect(component.data).toEqual([]);
  });
  it('isAdd defaults to: false', () => {
    expect(component.isAdd).toEqual(false);
  });
  it('isEdit defaults to: false', () => {
    expect(component.isEdit).toEqual(false);
  });
  it('divList defaults to: false', () => {
    expect(component.divList).toEqual(false);
  });
  it('divAdd defaults to: false', () => {
    expect(component.divAdd).toEqual(false);
  });
  describe('constructor', () => {
    it('makes expected calls', () => {
      expect(MenuComponent.prototype.CreateFormGroup).toHaveBeenCalled();
    });
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const changeDetectorRefStub: ChangeDetectorRef = fixture.debugElement.injector.get(
        ChangeDetectorRef
      );
      spyOn(component, 'getAllMenu');
      spyOn(changeDetectorRefStub, 'detectChanges');
      component.ngOnInit();
      expect(component.getAllMenu).toHaveBeenCalled();
      expect(changeDetectorRefStub.detectChanges).toHaveBeenCalled();
    });
  });
  describe('getAllMenu', () => {
    it('makes expected calls', () => {
      const menuServiceStub: MenuService = fixture.debugElement.injector.get(
        MenuService
      );
      spyOn(menuServiceStub, 'getAllMenu');
      component.getAllMenu();
      expect(menuServiceStub.getAllMenu).toHaveBeenCalled();
    });
  });
  describe('GotoAddMenu', () => {
    it('makes expected calls', () => {
      const changeDetectorRefStub: ChangeDetectorRef = fixture.debugElement.injector.get(
        ChangeDetectorRef
      );
      spyOn(changeDetectorRefStub, 'detectChanges');
      component.GotoAddMenu();
      expect(changeDetectorRefStub.detectChanges).toHaveBeenCalled();
    });
  });
  describe('ClearData', () => {
    it('makes expected calls', () => {
      const changeDetectorRefStub: ChangeDetectorRef = fixture.debugElement.injector.get(
        ChangeDetectorRef
      );
      spyOn(changeDetectorRefStub, 'detectChanges');
      component.ClearData();
      expect(changeDetectorRefStub.detectChanges).toHaveBeenCalled();
    });
  });
});
