import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, MultiSelectComponent],
})
export class AppComponent {
  fb = inject(FormBuilder);
  title = 'multi-select-tailwind';
  options: string[] = ['option1', 'option2', 'option3'];
  people = this.fb.group({
    tag: this.fb.control<string[]>([]),
  });

  setMultiTagValue($event: string[]) {
    console.log($event);
    this.people.controls.tag.setValue($event);
  }

  onSubmit() {
    console.log(this.people.value);
  }
}
