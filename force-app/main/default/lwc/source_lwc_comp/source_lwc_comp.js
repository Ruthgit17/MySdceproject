import { LightningElement } from 'lwc';
import{NavigationMixin} from 'lightning/navigation';

export default class Source_lwc_comp extends NavigationMixin (LightningElement)
{
    Naviagtetotarget()
    {
        this[NavigationMixin.navigate]({

            type:'Standard__Component',

            attributes:{

                componentName:'c__NavigateToLwcAuracomp'
                 
            },
            state: {

                c__propertyValue: '500'

            }
        });
    }
}