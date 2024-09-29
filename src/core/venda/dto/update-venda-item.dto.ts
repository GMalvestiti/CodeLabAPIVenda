import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { EMensagem } from 'src/shared/enums/mensagem.enum';
import { CreateVendaItemDto } from './create-venda-item.dto';

export class UpdateVendaItemDto extends PartialType(CreateVendaItemDto) {
  @IsNotEmpty({ message: `ID ${EMensagem.DEVE_SER_INFORMADO}` })
  id: number;
}
