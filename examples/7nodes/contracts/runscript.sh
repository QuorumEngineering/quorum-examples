#!/bin/bash
PRIVATE_CONFIG=/Users/saiv/work/quorum-examples/examples/7nodes/qdata/c1/tm.ipc geth --exec "loadScript(\"$1\")" attach ipc:/Users/saiv/work/quorum-examples/examples/7nodes/qdata/dd1/geth.ipc