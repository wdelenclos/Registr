class TeamSerializer < ActiveModel::Serializer
  attributes :id,:name,:isPrivate,:users,:collection
end
