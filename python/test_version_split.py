from version_split import extract_version
import pytest

def test_nominal():
    assert extract_version('5.2.2') == '5.2'


def test_not_string():
    with pytest.raises(AttributeError):
        extract_version(5)


def test_incomplete():
    with pytest.raises(RuntimeError):
        extract_version('5')
        extract_version('5.')
        extract_version('5.2')
