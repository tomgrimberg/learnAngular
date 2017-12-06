import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser/src/browser/title';
import { CoursesService } from './courses.service';

/**
 *  1.Create Component
 *  2.Register it in Module
 *  3.Add an element in an HTML markup
 * 
 *  To Auto Generate Component by cli  'ng g c <componentName>'
 *  To Auto Generate Service   by cli  'ng g s <serviceName>'
 * 
 *  HTML vs DOM - some html attributes dosn't exist in DOM and vice versa!!!
 *  IMPORTENT - property binding is on DOM object attr NOT html attr
 *  for HTML attr use attr.<attrName>
 */


@Component({
    selector: 'courses', // <courses>
    template: `
    <h2>{{ "Title : " + getTitle() }}</h2>         <!-- Interplation binding title field -->
    <ul>
        <li *ngFor="let course of courses">        <!-- ngFor Directive -->
           {{course}}
        </li>
    </ul>
                                        <!-- Interplation binding is better for text -->
    <img src="{{imageUrl}}" />          <!-- Interplation binding src property -->
    <img [src]="imageUrl" />            <!-- property binding src property -->
                                        <!-- property binding is ONE way from comp to DOM -->
    <table>
        <tr>
            <td [attr.colspan]="colSpan"></td>    <!--need attr. for attr binding on HTML Attribute -->
        </tr>
    </table>

    <button class="btn btn-primary" [class.active]="isActive">  <!--class Binding class.<className>="condition" -->
        BootStrap Button                                        <!-- adds 'active' class by condition in "" -->
    </button>

    <button [style.backgroundColor]="isActive ? 'blue': 'white' "> <!--Style Binding style.<styleName>="condition value" -->
        Style Bind
    </button>

    <div (click)="onDivClick()">           <!--Event bubbling (if event not stoped will bubble dom tree) -->
        <button (click)="onClick($event)"> <!--Event Binding (eventName)="CallBack()" -->
            Event Bind                     <!-- $event is used to get data from the event -->
        </button>
    </div>

    <input (keyup.enter)="onKeyup()" />    <!--Event filtering (method will be called only if 'Enter' is pressed)-->
    `
})
export class CoursesComponent {
    title = 'List of courses';
    courses;
    imageUrl = 'http://lorempixel.com/400/200';
    colSpan = 2;
    isActive = false;

    // Dependency Injection by adding as parameter of constructor
    // and register dependency in the module
    constructor(service: CoursesService) {
        // let service = new CoursesService(); // imported on top. bad because it's tightly coupled
        this.courses = service.getCourses();
    }
    getTitle() {
        return this.title;
    }

    onClick($event) {
        alert('Button Click is Bind');
        // STOPS Event bubbling
        $event.stopPropagation();
        console.log($event);
    }

    onDivClick() {
        alert('Div was Clicked');
    }

    onKeyup() {
        alert('Enter Was Pressed');
    }
}
