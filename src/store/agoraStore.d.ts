declare module 'agoraStore' {
  import { mapState, mapMutations } from 'vuex';
  import { i18n } from '@common/language';
  import * as mutationTypes from '@common/store/types';
  import store from '@common/store';

  export default mapState;
  export default mapMutations;
  export default i18n;
  export default mutationTypes;
  export default store
}
