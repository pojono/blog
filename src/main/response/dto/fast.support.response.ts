import { ApiModelProperty } from '@nestjs/swagger';

export class FastSupportResponseDto {
  @ApiModelProperty({ type: 'number', nullable: false })
  public readonly id: number;

  @ApiModelProperty({ type: 'string', nullable: true })
  public readonly name: string;

  @ApiModelProperty({ type: 'number', nullable: true })
  public readonly trackId: number;

  @ApiModelProperty({ type: 'boolean', nullable: false })
  public readonly forMainPage: boolean;

  @ApiModelProperty({ type: 'string', nullable: true })
  public readonly colour: string;
}
