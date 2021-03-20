import {Component, OnInit, AfterViewInit, OnDestroy} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4geodata_worldlow from '@amcharts/amcharts4-geodata/indiaHigh';
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {
  private chart: am4maps.MapChart;
  constructor() { }
  ngAfterViewInit(): void {
    this.chart = am4core.create('map-container', am4maps.MapChart);
    this.chart.geodata = am4geodata_worldlow;
    this.chart.projection = new am4maps.projections.Miller();
    // Add zoom control
    this.chart.zoomControl = new am4maps.ZoomControl();
    // creating polygon series and loading data
    const polygonSeries = this.chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;
    // configure Series
    const polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = '{name}';
    polygonTemplate.polygon.fillOpacity = 0.6;
    polygonTemplate.fill = am4core.color('#74B267');
    const hs = polygonTemplate.states.create('hover');
    hs.properties.fill = am4core.color('#74B999');
  }
  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.dispose();
    }
  }
  ngOnInit(): void {
  }
}
