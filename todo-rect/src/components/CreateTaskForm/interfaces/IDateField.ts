import { IDisabled } from './IDisabled';
import { Dayjs } from 'dayjs'; 
export interface IDateField extends IDisabled {
  value?: Dayjs | null;  
  onChange?: (date: Dayjs | null) => void;  
}
