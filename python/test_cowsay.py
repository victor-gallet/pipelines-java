import cowsay
import sys

cowsay.tux("Python is fun")

cowsay.tux("Build ID {0}".format(sys.argv[1]))

print("##vso[task.setvariable variable=MaVariable;isOutput=true]value")