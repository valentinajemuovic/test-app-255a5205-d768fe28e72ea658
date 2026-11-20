import type { SkyTravelDriver } from '../../../../driver/port/sky-travel-driver.js';
import type { ViewProfileResponse } from '../../../../driver/port/dtos/ViewProfileResponse.js';
import { SIGN_IN } from '../../../../driver/port/dtos/ViewProfileRequest.js';
import { UseCaseResult } from '../../shared/use-case-result.js';
import type { UseCaseContext } from '../../shared/use-case-context.js';
import { BaseSkyTravelUseCase } from './base/BaseSkyTravelUseCase.js';
import { ViewProfileVerification } from './ViewProfileVerification.js';

export class ViewProfile extends BaseSkyTravelUseCase<ViewProfileResponse, ViewProfileVerification> {
  private whenAskedToSignIn: string | null = null;

  constructor(driver: SkyTravelDriver, context: UseCaseContext) {
    super(driver, context);
  }

  /** A visitor asked to sign in signs in as the customer (UI only). */
  signInWhenAsked(): this {
    this.whenAskedToSignIn = SIGN_IN;
    return this;
  }

  async execute(): Promise<UseCaseResult<ViewProfileResponse, ViewProfileVerification>> {
    const result = await this.driver.viewProfile({ whenAskedToSignIn: this.whenAskedToSignIn });

    return new UseCaseResult(
      result,
      this.context,
      (response, ctx) => new ViewProfileVerification(response, ctx),
    );
  }
}
