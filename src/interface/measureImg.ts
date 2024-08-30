export interface measureImg{
    id?:string;
    image:string;
    customer_code:string;
    measure_datetime:string;
    measure_type:'Water'|'Gas'
}