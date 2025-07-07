import { Tag } from '@ideamall/ideashop-server';
import { Filter } from 'mobx-restful';
import { StrapiListModel } from 'mobx-strapi';

export type Base = Required<
  Pick<Tag, 'id' | 'documentId' | 'createdAt' | 'updatedAt'>
>;

export const API_HOST = process.env.TARO_APP_API_HOST!;

export abstract class TableModel<
  D extends Base,
  F extends Filter<D> = Filter<D>
> extends StrapiListModel<D, F> {
  indexKey = 'documentId' as const;
}
