const opentelemetry = require("@opentelemetry/sdk-node");
const { getNodeAutoInstrumentations } = require("@opentelemetry/auto-instrumentations-node");
const { OTLPMetricExporter } =  require('@opentelemetry/exporter-metrics-otlp-grpc');
const { OTLPTraceExporter } =  require('@opentelemetry/exporter-trace-otlp-grpc');

const sdk = new opentelemetry.NodeSDK({
  traceExporter: new OTLPTraceExporter(),
  metricExporter: new OTLPMetricExporter(),
  instrumentations: [getNodeAutoInstrumentations()]
});

sdk.start()