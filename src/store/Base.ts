import { Base, ListChunk } from '@ideamall/data-service';
import { ListModel, NewData } from 'mobx-restful';
import queryString from 'query-string';

export abstract class TableModel<
  D extends Base,
  F extends NewData<D> = NewData<D>
> extends ListModel<D, F> {
  async loadPage(pageIndex: number, pageSize: number, filter: F) {
    const { body } = await this.client.get<ListChunk<D>>(
      `${this.baseURI}?${queryString.stringify({
        ...filter,
        pageIndex,
        pageSize
      })}`
    );
    return { pageData: body!.list, totalCount: body!.count };
  }
}
