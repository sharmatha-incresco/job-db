import { ApiProperty } from "@nestjs/swagger";


export class Jobs {
    @ApiProperty()
    id: string;
    @ApiProperty()
    jobposition:string;
    @ApiProperty()
    company:string;
    @ApiProperty()
    location:string;
    
}