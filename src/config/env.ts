/** 请求服务的环境配置 */
type ServiceEnv = Record<ServiceEnvType, ServiceEnvConfig>;

/** 不同请求服务的环境配置 */
const serviceEnv: ServiceEnv = {
	development: {
		url: 'https://mock.mengxuegu.com/mock/61e4df7c17249f68847fc191/api',
		urlPattern: '/url-pattern',
		secondUrl: 'http://localhost:8081',
		secondUrlPattern: '/second-url-pattern',
	},
	test: {
		url: 'http://localhost:8080',
		urlPattern: '/url-pattern',
		secondUrl: 'http://localhost:8081',
		secondUrlPattern: '/second-url-pattern',
	},
	production: {
		url: 'http://localhost:8080',
		urlPattern: '/url-pattern',
		secondUrl: 'http://localhost:8081',
		secondUrlPattern: '/second-url-pattern',
	},
};

/**
 * 获取当前环境模式下的请求服务的配置
 * @param env 环境
 */
export function getServiceEnvConfig(mode: ServiceEnvType = 'development') {
	const config = serviceEnv[mode];

	return config;
}
