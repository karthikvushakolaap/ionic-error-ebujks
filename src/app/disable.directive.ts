import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
  @Directive({
      selector: '[appDisable]'
  })
  export class DisableDirective {
      
      @Input() ifTruthy: boolean = false;

      @HostListener('click', ['$event']) clickEvent(event: Event): boolean {
          if (this.ifTruthy) {
              console.log('Preventing click');
              console.log('This should prevent further clicks from happening?');
              event.preventDefault();
              event.stopPropagation();
              return false;
          }

          return true;
      }

      constructor(
          private element: ElementRef,
          protected renderer: Renderer2) {
      }

  }
