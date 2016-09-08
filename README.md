
#Alces flight-common

##Overview

This repository is for various reusable components shared between different
[Alces Flight](http://alces-flight.com/) web apps.

At the moment this consists of:

- shared styles, fonts, and images for a consistent UI and design between apps;

- shared React components;

- shared Redux modules, along with related  React components;

- any other shared utilities.

Potential things to consider moving here in future include:

- the overall structure of the `App` container which is shared between apps;

- a generalized version of our `apiRequests` middleware, which is currently
  duplicated and adapted between projects;

- shared webpack config used between projects;

- any other shared components, particularly between [Alces Access
  Manager](https://github.com/alces-software/alces-access-manager) and [Alces
  Storage Manager](https://github.com/alces-software/alces-storage-manager) as
  these now share a fairly similar interface.

##Using flight-common

flight-common was originally created to reduce duplication between [Alces
Access Manager](https://github.com/alces-software/alces-access-manager) (AAM)
and [Alces Storage
Manager](https://github.com/alces-software/alces-storage-manager) (ASM). AAM
has been fully adapted to use flight-common, so examples of usage can be found
there. A guide produced for adapting ASM is available
[here](https://gist.github.com/BobWhitelock/494119daba2c088300f949d6949b0268);
this should also be fairly applicable to other projects.

##Adding components to flight-common

The process of adding new components to the flight-common repository should be
relatively straightforward, and should just consist of:

1. adding in the code to be moved;

2. adapting this to be more general, if needed;

3. deleting the original code from other repositories, and changing these to
use the new version from flight-common.

However, step (1) can be made slightly more complicated than just copying the
code in, in the interests of preserving the git history of the code, which is a
useful thing to have. See [this
commit](https://github.com/alces-software/flight-common/commit/b9e23246b34b54c41f9fed80dd867851567451c4)
for an example of doing this, which can be adapted to individual situations.
