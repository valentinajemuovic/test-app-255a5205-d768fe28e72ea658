import type { SkyTravelDriver } from '../../../../driver/port/sky-travel-driver.js';
import type { BrowseCouponsResponse } from '../../../../driver/port/dtos/BrowseCouponsResponse.js';
import { UseCaseResult } from '../../shared/use-case-result.js';
import type { UseCaseContext } from '../../shared/use-case-context.js';
import { BaseSkyTravelUseCase } from './base/BaseSkyTravelUseCase.js';
import { BrowseCouponsVerification } from './BrowseCouponsVerification.js';

export class BrowseCoupons extends BaseSkyTravelUseCase<BrowseCouponsResponse, BrowseCouponsVerification> {
  private _page?: string;
  private _size?: string;

  constructor(driver: SkyTravelDriver, context: UseCaseContext) {
    super(driver, context);
  }

  page(page: string): this {
    this._page = page;
    return this;
  }

  size(size: string): this {
    this._size = size;
    return this;
  }

  async execute(): Promise<UseCaseResult<BrowseCouponsResponse, BrowseCouponsVerification>> {
    const result = await this.driver.browseCoupons({ page: this._page, size: this._size });

    return new UseCaseResult(
      result,
      this.context,
      (response, ctx) => new BrowseCouponsVerification(response, ctx),
    );
  }
}
