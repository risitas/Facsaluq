import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalServiciosAcademicosPage } from './modal-servicios-academicos.page';

describe('ModalServiciosAcademicosPage', () => {
  let component: ModalServiciosAcademicosPage;
  let fixture: ComponentFixture<ModalServiciosAcademicosPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalServiciosAcademicosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalServiciosAcademicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
