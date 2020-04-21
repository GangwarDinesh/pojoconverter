export const CONSTANTS_VALUES = {
    SERVER_PROTOCOL: 'http://',
    SERVER_IP: '192.168.0.108',
    SERVER_PORT: ':8085',
    SERVER_CONTEXT_PATH: '/backend-services/api/',
    SERVER_API_VERSION: 'v1'
  };
export const API_COMMON_URL = CONSTANTS_VALUES.SERVER_PROTOCOL+
                              CONSTANTS_VALUES.SERVER_IP+
                              CONSTANTS_VALUES.SERVER_PORT+
                              CONSTANTS_VALUES.SERVER_CONTEXT_PATH+
                              CONSTANTS_VALUES.SERVER_API_VERSION;