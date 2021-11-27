import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalBienestarUniversitarioPage } from './modal-bienestar-universitario.page';

describe('ModalBienestarUniversitarioPage', () => {
  let component: ModalBienestarUniversitarioPage;
  let fixture: ComponentFixture<ModalBienestarUniversitarioPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBienestarUniversitarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalBienestarUniversitarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
