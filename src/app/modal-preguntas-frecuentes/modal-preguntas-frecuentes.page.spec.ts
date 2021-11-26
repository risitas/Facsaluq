import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalPreguntasFrecuentesPage } from './modal-preguntas-frecuentes.page';

describe('ModalPreguntasFrecuentesPage', () => {
  let component: ModalPreguntasFrecuentesPage;
  let fixture: ComponentFixture<ModalPreguntasFrecuentesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPreguntasFrecuentesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalPreguntasFrecuentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
