import {Directive, ElementRef, Renderer2, HostListener, HostBinding} from '@angular/core';
@Directive({
    selector:'[userDirect]'
})
export class UserDirective {
   @HostBinding('class.open') isActive1 = false;
//    @HostBinding('class.close') isClose = true;
   constructor(private ER: ElementRef, private render: Renderer2){
        // ER.nativeElement.style.backgroundColor = 'red';
        // ER.nativeElement.style.color = "white";
        // ER.nativeElement.style.fontSize = "30px";
        // render.setStyle(ER.nativeElement, 'backgroundColor', 'green');
        // render.setStyle(ER.nativeElement, 'color', 'white');
        // render.setStyle(ER.nativeElement, 'fontSize', '30px');
    }
    @HostListener('mousemove') onmousemove(){
        // this.isActive;
        // this.render.setStyle(this.ER.nativeElement, 'backgroundColor', 'green');
        // this.render.setStyle(this.ER.nativeElement, 'color', 'white');
        // this.render.setStyle(this.ER.nativeElement, 'fontSize', '30px'); 
    }
    @HostListener('mouseleave') onmouseleave(){
//    this.isClose;
        // this.render.setStyle(this.ER.nativeElement, 'backgroundColor', 'transparent');
        // this.render.setStyle(this.ER.nativeElement, 'color', 'black');
        // this.render.setStyle(this.ER.nativeElement, 'fontSize', '18px'); 
    }

    @HostListener('click') onclick(){
        this.isActive1 = !this.isActive1;
    }
}