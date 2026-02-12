import pino from "pino"

const log = pino()

log.info("subiu")
log.warn("atenção")
log.error("deu erro")