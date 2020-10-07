export const API = {
  WHOIS_URL: process.env.WHOIS_API_URL,
  DOMAIN_REPUTATION_URL: process.env.DOMAIN_REPUTATION_API_URL,
  APP_API_URL: process.env.APP_API_URL,
  FAMILIES_URL: process.env.FAMILIES_URL,
  DEMODATA_URL: process.env.DEMODATA_URL
};

export const KEYCLOAK_PROVIDER_INIT_CONFIG = {
  onLoad: process.env.KEYCLOAK_AUTHENTICATE
};

export const THREAT_MODEL = {
  BEACONING: 'beaconing',
  DGA: 'dga',
  SQL_INJECTION: 'sql_injection',
  CROSS_SITE_SCRIPTING: 'cross_site_scripting',
  PATH_TRAVERSAL: 'path_traversal',
  PHISHING: 'phishing',
  PORTSCAN: 'portscan'
};

export const LOGON_USER_STORAGE_KEY = `en-aa-logon-user`;

export const LOADING_STATES = {
  INITIAL: 'initial',
  LOADING: 'loading',
  ERROR: 'error',
  LOADED: 'loaded'
};

export const DB_DATE_FORMAT = 'yyyy-MM-dd';

export const SEARCH_STATE = {
  INITIAL: 0,
  ACTIVATED: 1
};

export const ES_PARAMS = {
  DGA: ['src_ip', 'alert_type', 'alert_name', 'date'],
  BEACONING: [
    'src_ip',
    'dest_ip',
    'dest_port',
    'alert_type',
    'alert_name',
    'date'
  ],
  WEB_EXPLOIT: [
    'src_ip',
    'dest_ip',
    'dest_port',
    'alert_type',
    'alert_name',
    'date'
  ],
  PHISHING: ['src_ip', 'dest_ip', 'alert_type', 'alert_name', 'date']
};

export const WHOIS_FORMAT = {
  SIMPLE: 'simple',
  RAW: 'raw'
};

export const NO_OF_OCTET_MASK = 2;

export const DEFAULT_LOAD_AMOUNT = 1000;
export const MAX_LOAD_AMOUNT = 10000;

export const ALERT_PAGING_LIMIT = 10;
