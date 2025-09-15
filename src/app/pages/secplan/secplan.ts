import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { CommonModule } from '@angular/common';
import { Contentsecplan } from '../../components/contentsecplan/contentsecplan';
import { Footer } from '../../components/footer/footer';


@Component({
  selector: 'app-secplan',
  standalone: true, // 👈 IMPORTANTE
  templateUrl: './secplan.html',
  styleUrls: ['./secplan.css'],
  imports: [Header, Contentsecplan, Footer, CommonModule],
})
export class SecplanComponent {}
