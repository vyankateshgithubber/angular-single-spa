import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSummaryComponent } from './chat-summary.component';

describe('ChatSummaryComponent', () => {
  let component: ChatSummaryComponent;
  let fixture: ComponentFixture<ChatSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
