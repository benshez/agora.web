import axios, { AxiosRequestConfig } from 'axios';
import { IUser, IUserByEmail, AgoraConfiguration, BaseService } from '../../';

export class UserService extends BaseService {
  private user: IUser;
  private config: AxiosRequestConfig = { headers: this.getHeaders() };

  GET_USER_BY_EMAIL(user: IUserByEmail): Promise<any> {
    this.config.data = JSON.stringify(user);

    return axios.post(
      `${AgoraConfiguration.APP_SETTINGS.APP_ROUTES.LOGIN_ROUTE}`,
      user,
      this.config
    );
  }

  ADD_USER(user: IUser): Promise<any> {
    this.config.data = JSON.stringify(user);

    return axios.post(
      `${AgoraConfiguration.APP_SETTINGS.APP_ROUTES.ADD_USER_ROUTE}`,
      user,
      this.config
    );
  }
}
