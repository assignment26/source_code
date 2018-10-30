import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public demo: string;
  public gender: string;
  public country: string;


  myFunction1(){
  this.demo="+4477666980";
  this.gender="Male";
  this.country="USA"
  }
  myFunction2(){
    this.demo="+4437534538";
    this.gender="Male";
  this.country="Australia"
    }
  myFunction3(){
      this.demo="+4443534692";
      this.gender="Male";
      this.country="Ukraine"
      }  
  myFunction4(){
      this.demo="+4437666900";
      this.gender="Male";
      this.country="Australia"
        }         
  myFunction5(){
        this.demo="+4555766691";
        this.gender="Male";
        this.country="Dubai"
          }     
  myFunction6(){
        this.demo="+4445666921";
        this.gender="Male";
        this.country="Switzerland"
            }     
            
  myFunction7(){
        this.demo="+4476456626";
        this.gender="Female";
        this.country="Malaysia"
              }

 myFunction8(){
        this.demo="+447763454";
        this.gender="Female";
        this.country="Canada"                                   
              }     
                
  myFunction9(){
          this.demo="+4477666922";
          this.gender="Female";
          this.country="Dubai"
                  }

  myFunction10(){
          this.demo="+4477634576";
          this.gender="Female";
          this.country="Iran"
                }

  myFunction11(){
          this.demo="+4657566954";
          this.gender="Female";
          this.country="Turkey"
                }

  myFunction12(){
          this.demo="+4477666987";
          this.gender="Female";
          this.country="Austria"
                }     
 myFunction13(){
          this.demo="+4477666987";
          this.gender="Female";
          this.country="Dubai"
                }  
                 
 myFunction14(){
          this.demo="+4477166698";
          this.gender="Female";
          this.country="England"
                }     
 myFunction15(){
          this.demo="+4477266698";
          this.gender="Female";
          this.country="Iceland"
            }     
            
 myFunction16(){
          this.demo="+4477666987";
          this.gender="Male";
          this.country="Canada"
              }     
              
myFunction17(){
          this.demo="+4477669875";
          this.gender="Male";
          this.country="Syria"
        }     
        
myFunction18(){
              this.demo="+4477666875";
              this.gender="Female";
              this.country="Singapore"
              }     
              
myFunction19(){
              this.demo="+447766692";
              this.gender="Female";
              this.country="Thailand"
              }     
              
myFunction20(){
              this.demo="+4477666543";
              this.gender="Female";
              this.country="Malaysia"
              }       
  constructor() { }

  ngOnInit() {
  }

}
