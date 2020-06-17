import { Component, OnInit, Input } from "@angular/core";
import { Satellite } from "../satellite";

@Component({
  selector: "app-orbit-counts",
  templateUrl: "./orbit-counts.component.html",
  styleUrls: ["./orbit-counts.component.css"],
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];

  total: number = 0;
  spaceDebris: number = 0;
  communication: number = 0;
  probe: number = 0;
  positioning: number = 0;
  spaceStation: number = 0;
  telescope: number = 0;
  types: object[] = [];

  constructor() {
    // below part does not work in constructor, should be deleted
    // console.log(this.satellites.length);
    // for (let i=0; i<this.satellites.length; i++)  {
    //   if (this.satellites[i].type === 'Space Debris') {
    //     this.spaceDebris +=1;
    //   } else if (this.satellites[i].type === 'Communication') {
    //     this.communication +=1;
    //   } else if (this.satellites[i].type === 'Probe') {
    //     this.probe +=1;
    //   } else if (this.satellites[i].type === 'Positioning') {
    //     this.positioning +=1;
    //   } else if (this.satellites[i].type === 'Space Station') {
    //     this.spaceStation +=1;
    //   } else if (this.satellites[i].type === 'Telescope')  {
    //     this.telescope +=1;
    //   }
    // }
  }

  ngOnInit() {}

  ngOnChanges() {
    // console.log("satellite length:" + this.satellites.length);
    this.total = this.satellites.length;
    this.spaceDebris = 0;
    this.spaceStation = 0;
    this.communication = 0;
    this.probe = 0;
    this.positioning = 0;
    this.spaceStation = 0;
    this.telescope = 0;
    for (let i = 0; i < this.satellites.length; i++) {
      if (this.satellites[i].type === "Space Debris") {
        this.spaceDebris += 1;
      } else if (this.satellites[i].type === "Communication") {
        this.communication += 1;
      } else if (this.satellites[i].type === "Probe") {
        this.probe += 1;
      } else if (this.satellites[i].type === "Positioning") {
        this.positioning += 1;
      } else if (this.satellites[i].type === "Space Station") {
        this.spaceStation += 1;
      } else if (this.satellites[i].type === "Telescope") {
        this.telescope += 1;
      }
    }
    // console.log(this.types);
    this.types[0] = {name:'Space Debris', count:this.spaceDebris};
    this.types[1] = {name:'Communication', count:this.communication};
    this.types[2] = {name:'Probe', count:this.probe};
    this.types[3] = {name:'Positoning', count:this.positioning};
    this.types[4] = {name:'SpaceStation', count:this.spaceStation};
    this.types[5] = {name:'Telescope', count:this.telescope};
    // console.log(this.types);
  }
}
