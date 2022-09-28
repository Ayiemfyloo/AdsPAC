function FindProxyForURL(url, host) {
	const u = url.toLowerCase();
	const h = host.toLowerCase();

	if (dnsDomainIs(h, "facebook.com") || false) {
		return "DIRECT";
	} else if (dnsDomainIs(h, "facebook.com") || false) {
		return "PROXY 0.0.0.0:53";
	} else {
		return "DIRECT";
	}
}
