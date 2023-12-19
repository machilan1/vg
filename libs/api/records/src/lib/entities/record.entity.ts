import { ApiProperty } from "@nestjs/swagger";

export class Record {
   @ApiProperty()
    recordId!: number;

    @ApiProperty()
    productId!: number;

    @ApiProperty()
    createdAt!: Date;

    @ApiProperty()
    unitPrice!: number;

    @ApiProperty()
    unitOfMeasure!: string;

    @ApiProperty()
    trackNumber!: string;

}