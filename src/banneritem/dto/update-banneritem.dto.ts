import { PartialType } from '@nestjs/mapped-types';
import { CreateBanneritemDto } from './create-banneritem.dto';

export class UpdateBanneritemDto extends PartialType(CreateBanneritemDto) {}
