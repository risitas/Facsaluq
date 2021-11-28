import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalProgramasAcademicosPage } from './modal-programas-academicos.page';

describe('ModalProgramasAcademicosPage', () => {
  let component: ModalProgramasAcademicosPage;
  let fixture: ComponentFixture<ModalProgramasAcademicosPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalProgramasAcademicosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalProgramasAcademicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
