import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  input,
  output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIconComponent } from '@ng-icons/core';
import { debounceTime, fromEvent } from 'rxjs';

@Component({
  selector: 'app-multi-select',
  standalone: true,
  imports: [NgIconComponent, FormsModule],
  templateUrl: './multi-select.component.html',
  styleUrl: './multi-select.component.css',
})
export class MultiSelectComponent implements OnInit, OnChanges {
  @Input() name: string = '';
  @Input() options: string[] = [];
  @Input() selectedOptions: string[] = [];
  open: boolean = false;
  filteredOptions: string[] = this.options;
  selectOptionChange = output<string>();
  clearOptionChange = output();
  searchText: string = '';

  ngOnInit(): void {
    this.filteredOptions = this.options;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['options']) {
      this.filteredOptions = this.options.filter((opt) =>
        opt.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }

  onSearchChange() {
    if (!this.searchText || this.searchText === '') {
      this.filteredOptions = this.options;
    } else {
      this.filteredOptions = this.options.filter((opt) =>
        opt.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
    console.log(this.filteredOptions);
  }

  toggle() {
    this.open = !this.open;
  }

  toggleOption(option: string) {
    this.selectOptionChange.emit(option);
  }

  clearOption() {
    this.clearOptionChange.emit();
  }
}
