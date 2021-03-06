Package.describe({
	name: 'cliffers:shopify-api',
	summary: 'Package for the Shopify API. Also handles OAuth authentication for embedded shopify apps',
	version: '0.4.0',
	git: 'https://github.com/lukeclifton/shopify-api-meteor'
});

Package.onUse(function(api) {
	api.versionsFrom('1.0.2.1');

	// Both client and server
	api.use([
		'mongo',
		'iron:router@1.0.7',
		'accounts-base',
		'service-configuration'
	], ['client', 'server']);

	// Client only
	api.use([
		'templating'
	], 'client');

	// Server only
	api.use([
		'http',
		'jparker:crypto-sha256@0.1.1',
		'jparker:crypto-hmac@0.1.0'
	], 'server');

	api.addFiles('server.js', 'server');
	api.addFiles('client.js', 'client');
	api.addFiles('router.js', 'client');

	api.export('ShopifyApi');
});