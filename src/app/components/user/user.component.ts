import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  bootstrapGenderMale,
  bootstrapGenderFemale,
  bootstrapEnvelopeFill,
  bootstrapTelephoneFill,
  bootstrapEyeFill,
  bootstrapPencilFill,
  bootstrapTrash,
} from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-user',
  imports: [NgIcon],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  viewProviders: [
    provideIcons({
      bootstrapGenderMale,
      bootstrapGenderFemale,
      bootstrapEnvelopeFill,
      bootstrapTelephoneFill,
      bootstrapEyeFill,
      bootstrapPencilFill,
      bootstrapTrash,
    }),
  ],
})
export class UserComponent {
  @Input() name: string = '';
  @Input() image: string = '';
  @Input() gender: string = 'male';
  @Input() email: string = '';
  @Input() phone: string = '';
}
