import { LightningElement,track } from 'lwc';

export default class Lwc_examples_practise extends LightningElement
 
{
    
    value = "Rutheesh";

    Lname ;
    fname ;
    

    handlename(event){
      this.value =Event.target.value;
    }
 // Conditional Rendering

    handleFirst()
     {
        this.fname=true;
        this.Lname=true;
     }
     handleLast()
     {
        this.fname=false;
        this.Lname=false;
     }

     // for Each Directive
       
        students =[
            {
                id:'18',
                Name:'Teja',
                Branch:'BZC'

            },
            {
                id:'17',
                Name:'Ruth',
                Branch:'B>Tech'

            },
            {
                id:'19',
                Name:'padhu',
                Branch:'BSC'

            }
        ]

        //  sample calculator
      
        @track no1;
        @track no2;
        @track result;
       

        handlechange(event){
            const currentinput = event.target.name;
            const currentval = event.target.value;

            if(currentinput==='number1')
            {
                this.no1=currentval;
            }

            
            this.no2 = currentval;
            
        }

        doadd(){
            this. result = parseInt(this.no1)+parseInt(this.no2);
        }
        dosub(){
            this.result = parseInt(this.no1)-parseInt(this.no2);
        }
        domul(){
            this.result = parseInt(this.no1)*parseInt(this.no2);
        }
        dodiv(){
            this.result = parseInt(this.no1)/parseInt(this.no2);
        }

        // custom validatoions

        handle(){
            const regex = "[A-Z]{5}[0-9]{4}[A-Z]{1}";

            let pancard = this.template.querySelector(".pan");

            var pancardval = pancard.value;

            if(currentinput.match(regex))
            {
                pancard.setCustomValidity("");
            }
            else
            {
            pancard.setCustomValidity("Enter the currect pan number");
           
            }
            pancard.reportValidity();
             
        }


        // custom metadata and custonm labels

           @track labels

        




}