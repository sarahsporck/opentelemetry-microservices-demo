'use strict';

const { OTLPMetricExporter } = require('@opentelemetry/exporter-metrics-otlp-grpc');
const { MeterProvider } = require('@opentelemetry/sdk-metrics-base');

module.exports = (meterName) => {
    const meter = new MeterProvider({
    exporter: new OTLPMetricExporter(),
    interval: 1000
    }).getMeter(meterName);

    return meter;
}
