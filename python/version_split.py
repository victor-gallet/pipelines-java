#!/usr/bin/env python3
import argparse
import logging


def extract_version(version: str) -> str:
    # Set up logging
    logging.basicConfig(level=logging.INFO, format='%(levelname)s: %(asctime)s: %(message)s')

    splitted = version.split('.')
    if len(splitted) < 3:
        logging.error('version input needs to be in the form of X.X.X was ' + version)
        raise RuntimeError('version input needs to be in the form of X.X.X was ' + version)
    return '.'.join(splitted[:2])


# Extract Major.Minor from a full version Major.Minor.Whatever
if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Extract Major.Minor from a full version Major.Minor.Whatever')
    parser.add_argument('version', help='input in the form of Major.Minor.Whatever')
    args = parser.parse_args()

    extracted = extract_version(args.version)
    print(extracted)
