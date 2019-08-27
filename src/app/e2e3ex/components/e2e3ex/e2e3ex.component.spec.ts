import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { E2e3exComponent } from './e2e3ex.component';
import { E2e3exService } from '../../e2e3ex.service';
import { Observable, Observer } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ExtableComponent } from '../extable/extable.component';

describe('E2e3exComponent', () => {
  let component: E2e3exComponent;
  let fixture: ComponentFixture<E2e3exComponent>;
  let service: E2e3exService;
  let mockUbigeos = '“01 Lima /  / ”\n' +
    '“01 Lima / 50 Lima / ”\n' +
    '“01 Lima / 51 Barranca / ”\n' +
    '“01 Lima / 50 Lima / 202 La Molina”\n' +
    '“01 Lima / 50 Lima / 203 San Isidro”\n' +
    '“02 Arequipa /  / ”\n' +
    '“02 Arequipa / 63 Arequipa / ”\n' +
    '“02 Arequipa / 64 Caylloma / ”\n' +
    '“02 Arequipa / 63 Arequipa / 267 Cercado”\n';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [E2e3exComponent, ExtableComponent],
      imports: [HttpClientTestingModule],
      providers: [E2e3exService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E2e3exComponent);
    component = fixture.componentInstance;


    service = fixture.debugElement.injector.get(E2e3exService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get ubigeos', () => {
    const mockData: string = mockUbigeos;

    spyOn(service, 'getUbigeos').and.returnValue(
      Observable.create((observer: Observer<{}>) => {
        observer.next(mockData);
        return observer;
      })
    );

    component.ngOnInit();
    expect(component.ubigeos).not.toBe(undefined);
  });

  it('should get distritos', () => {
    const mockData: string = mockUbigeos;

    spyOn(service, 'getUbigeos').and.returnValue(
      Observable.create((observer: Observer<{}>) => {
        observer.next(mockData);
        return observer;
      })
    );

    component.ngOnInit();
    expect(component.distritos.length).toBe(3);
    expect(component.distritos[0].nombre).toBe('La Molina');
    expect(component.distritos[0].nombrePadre).toBe('Lima');

  });

  it('should get provincias', () => {
    const mockData: string = "“01 Lima / 51 Barranca / ”";

    spyOn(service, 'getUbigeos').and.returnValue(
      Observable.create((observer: Observer<{}>) => {
        observer.next(mockData);
        return observer;
      })
    );

    component.ngOnInit();

    expect(component.provincias.length).toBe(1);
    expect(component.provincias[0].nombre).toBe('Barranca');
    expect(component.provincias[0].nombrePadre).toBe('Lima');

  });



  it('should get departamentos', () => {
    const mockData: string = mockUbigeos;

    spyOn(service, 'getUbigeos').and.returnValue(
      Observable.create((observer: Observer<{}>) => {
        observer.next(mockData);
        return observer;
      })
    );

    component.ngOnInit();
    expect(component.departamentos).not.toBe(undefined);
    expect(component.departamentos.length).toBeGreaterThan(0);

  });

});
